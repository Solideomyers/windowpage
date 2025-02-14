interface RateLimiterOptions {
  limit: number;
  window: number;
}

export class ServerRateLimiter {
  private requestLog: Map<string, number[]> = new Map();

  check(ip: string, options: RateLimiterOptions): boolean {
    const now = Date.now();
    const requests = this.requestLog.get(ip) || [];

    const recentRequests = requests.filter(
      (timestamp) => now - timestamp < options.window * 1000
    );

    if (recentRequests.length >= options.limit) return false;

    recentRequests.push(now);
    this.requestLog.set(ip, recentRequests);

    return true;
  }
}
