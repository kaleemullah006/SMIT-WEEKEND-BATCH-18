import { notFound } from "next/navigation";

type IProp = {
  params: Promise<{ id: string }>;
};

export default async function Product(props: IProp) {
  const params = await props.params;
  const id = params.id;

  if (id !== "1") {
    notFound();
  }

  return <h1>Product ID: {id}</h1>;
}