// good read: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// just in case we need to differentiate between prod and dev
export const domain =
  process.env.NODE_ENV === "production"
    ? "https://pokeapi.co/api/v2/"
    : "http://localhost:3333/api";

/**
 * The customFetch function is a helper function that is used to make API requests to a server. It takes in a route which is the path to the server endpoint, a body object which represents the data being sent to the server, and an optional conf object which represents any additional configuration options for the request.<br>
 * The function then constructs a fetch request with the appropriate headers and options, including the body if there is one. If the response status code is not 200, it returns an error object. Otherwise, it parses the JSON response and returns it.
 * 
 * @param {string} route - The route to send the request to
 * @param {object} options - Body, Configuration and Params
 * @returns {json} The response in JSON
 */
const customFetch = async (
  route: string,
  options: { body?: any; conf?: any; params?: any } = {}
) => {
  const { body, conf } = options;

  // const searchQuery = "?" + new URLSearchParams(options.params).toString();

  const response = await fetch(domain + route, {
    credentials: 'include',
    method: "GET",
    headers: {
      'Access-Control-Allow-Origin': '*',
      "Content-Type": "application/json",
    },
    ...conf,
    body: body && JSON.stringify(body),
  });

  if (response.status !== 200) {
    const error = await response.text();
    if (process.env.NODE_ENV !== "production") {
      console.log(error);
      const w = window.open(undefined, "_blank");
      w!.document.write(error);
    }
    return { error };
  }
  const res = await response.json();
  if (process.env.NODE_ENV !== "production") {
    console.log(res);
  }
  return res
};

/**
 * The basicPost function is a higher-order function that takes in a route and returns an async function that can be used as an event handler for a form submission. When the form is submitted, the function extracts the form data and calls customFetch with the route and the form data as the body object. It also includes the POST method in the conf object to indicate that it is a POST request.
 * @param {string} route - The route to send the request to
 * @returns {function} A customFetch reference that sends a POST request with the form data to the route specified
 */
export const basicPost = (route: string, callback = (res: any) => {}) => {
  return async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const FormDataEntryValue = new FormData(e.target as HTMLFormElement); //  e.target as typeof e.target & FormData;
    const inputs: any = {};
    FormDataEntryValue.forEach((value, key) => {
      inputs[key as string] = value;
    }); 
    const response = await customFetch(route, { body: inputs, conf: { method: "POST" } })
    callback(response)
    return response;
  };
};

// export const formLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
//   const inputs = e.target as typeof e.target & FormData;
//   return await customFetch("/authenticate", inputs);
// };

// export const formSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
//   const inputs = e.target as typeof e.target & FormData;
//   return await customFetch("/register", inputs);
// };

// interface Event {
//   id: number;
//   title: string;
//   location: string;
//   description: string;
//   eventStartsAt: string;
//   eventEndsAt: string;
//   doorOpensBeforeStart: boolean;
//   doorClosesAt: string;
//   createdAt: string;
//   updatedAt: string;
//   userId: number;
// }

// export const getEvents = async (): Promise<any> => {
//   return await customFetch(`/event`);
// };

// export const getEvent = async (id: number): Promise<any> => {
//   console.log(`fetching event ${id}`);
  
//   return await customFetch(`/event/${id}`);
// };

// export const createEvent = async (body: Event): Promise<any> => {
//   return await customFetch(`/event`, { body, conf: { method: 'POST' } });
// };