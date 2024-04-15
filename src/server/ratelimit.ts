
import { isDev } from "@/utils/isDev";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const upstashRatelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});

const mockRatelimit = {
  limit() {
    return {success: true}
  }
}

export const ratelimit = isDev ? upstashRatelimit : mockRatelimit;