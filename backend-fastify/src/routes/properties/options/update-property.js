import { propertyNotFound, propertyProperties } from "./schema.js";

export const updatePropertyOpts = (handler) => ({
  schema: {
    response: {
      201: {
        type: "object",
        properties: {
          status: {
            type: "number",
            default: 201,
          },
          message: {
            type: "string",
            default: "Success",
          },
          data: propertyProperties,
        },
      },
      // ERRORS
      404: propertyNotFound,
    },
  },
  handler: handler,
});
