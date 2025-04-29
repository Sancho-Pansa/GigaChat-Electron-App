import axios from "axios";
import NodeCache from "node-cache";

class AuthService {
  constructor() {
    const STANDART_CACHE_TTL = 1700;
    this.cache = new NodeCache({ stdTTL: STANDART_CACHE_TTL });
    this.refreshInProgress = false;
    this.pendingRequests = [];
  }

  async getToken() {
    const cachedToken = this.cache.get("apiToken");
    if (cachedToken) {
      return cachedToken;
    }

    if (this.refreshInProgress) {
      return new Promise((resolve) => {
        this.pendingRequests.push(resolve);
      });
    }

    this.refreshInProgress = true;
    try {
      const newToken = await this.refreshToken();
    } catch (error) {
      this.rejectPendingRequests(error);
      throw error;
    } finally {
      this.refreshInProgress = false;
    }
  }
}
