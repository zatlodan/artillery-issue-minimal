import type { ActionFn } from "artillery";

import { map } from "ramda";

export const sendRequest: ActionFn = async (context, events) => {
  const timeBefore = Date.now();

  const result = await fetch(context.vars.target ?? "");

  const timeTaken = Date.now() - timeBefore;

  events.emit("histogram", `fetch.response_time`, timeTaken);

  console.log(result.status);

  // Just so that the "ramda" dependency is actually used
  console.log(map((i) => i + 1, [1, 2, 3]));
};
