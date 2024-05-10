import { db } from "../models/db.js";
import { TrackSpec } from "../models/joi-schemas.js";
import { imageStore } from "../models/mongo/image-store.js";

export const playlistController = {
  index: {
    handler: async function (request, h) {
      let loggedInUser = null;
      if (request.auth.isAuthenticated) {
        loggedInUser = request.auth.credentials;
      }
      const test = loggedInUser ? true : false; 
      const playlist = await db.playlistStore.getPlaylistById(request.params.id);
      const viewData = {
        title: "Playlist",
        user: loggedInUser,
        playlist: playlist,
        test: test,
      };
      return h.view("playlist-view", viewData);
    },
  },
  addTrack: {
    validate: {
      payload: TrackSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("playlist-view", { title: "Add track error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const playlist = await db.playlistStore.getPlaylistById(request.params.id);
      const newTrack = {
        title: request.payload.title,
        artist: request.payload.artist,
        duration: Number(request.payload.duration),
        lat: Number(request.payload.lat),
        img: request.payload.img,
        description: request.payload.description,
      };
      await db.trackStore.addTrack(playlist._id, newTrack);
      return h.redirect(`/playlist/${playlist._id}`);
    },
  },
  uploadImage: {
    handler: async function (request, h) {
      try {
        const playlist = await db.playlistStore.getPlaylistById(request.params.id);
        const file = request.payload.imagefile;
        if (Object.keys(file).length > 0) {
          const url = await imageStore.uploadImage(request.payload.imagefile);
          playlist.img = url;
          await db.playlistStore.updatePlaylist(playlist);
        }
        return h.redirect(`/playlist/${playlist._id}`);
      } catch (err) {
        console.log(err);
        return h.redirect(`/playlist/${playlist._id}`);
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true,
    },
  },
  deleteTrack: {
    handler: async function(request, h) {
      const playlist = await db.playlistStore.getPlaylistById(request.params.id);
      await db.trackStore.deleteTrack(request.params.trackid);
      return h.redirect(`/playlist/${playlist._id}`);
    },
  },
};
