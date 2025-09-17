type Event = {
  message: string;
};

const processMap = (eventMap: Map<string, Event>) => {
  const event = eventMap.get("error");
  if (event) {
    const message = event.message;
    throw new Error(message);
  }
};

processMap(
  new Map<string, Event>([
    ["error", { message: "Something went wrong!" }],
    ["info", { message: "Just FYI." }],
  ])
);

export {};
