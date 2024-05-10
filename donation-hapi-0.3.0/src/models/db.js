import { userMongoStore } from "./mongo/user-mongo-store.js";
import { donationMongoStore } from "./mongo/donation-mongo-store.js";
import { candidateMongoStore } from "./mongo/candidate-mongo-store.js";
import { trackMongoStore } from "./mongo/track-mongo-store.js";
import { playlistMongoStore } from "./mongo/playlist-mongo-store.js";
import { connectMongo } from "./mongo/connect.js";

export const db = {
  userStore: null,
  donationStore: null,
  candidateStore: null,
  trackStore: null,

  init(storeType) {
    switch (storeType) {
      case "mongo":
        this.userStore = userMongoStore;
        this.donationStore = donationMongoStore;
        this.candidateStore = candidateMongoStore;
        this.trackStore = trackMongoStore;
        this.playlistStore = playlistMongoStore;
        connectMongo();
        break;
      default:
    }
  },
};
