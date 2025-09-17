const parsedData: {
  name: string;
  age: number;
  isAdmin: boolean;
  courses: string[];
} = JSON.parse(
  '{"name":"sagar","age":21,"isAdmin":true,"courses":["html","css","js"]}'
);

export {};
