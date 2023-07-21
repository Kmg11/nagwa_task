export const errorSchemas = {
	ErrorMessage: {
		type: "object",
		properties: {
			message: {
				type: "string",
				description: "A message indicating the error that occurred.",
			},
		},
	},
};

export const errorsResponses = {
	InternalServerError: {
		description: "Internal server error",
		content: {
			"application/json": {
				schema: { $ref: "#/components/schemas/ErrorMessage" },
			},
		},
	},

	BadRequest: {
		description: "Bad request",
		content: {
			"application/json": {
				schema: { $ref: "#/components/schemas/ErrorMessage" },
			},
		},
	},

	NotFound: {
		description: "Not found",
		content: {
			"application/json": {
				schema: { $ref: "#/components/schemas/ErrorMessage" },
			},
		},
	},
};
