import { APIGatewayProxyHandler } from "aws-lambda";

export const handle: APIGatewayProxyHandler = async (event) => {
  const { id } = event.pathParameters;
  
}