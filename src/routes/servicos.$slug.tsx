import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    throw redirect({ to: "/$slug", params: { slug: params.slug }, statusCode: 301 });
  },
});
