import React from "react";
import { notFound } from "next/navigation";

export default async function Home({ params }: { params: { id: string } }) {
    if (params.id === '10') {
        return notFound();
    }

    return <h1>Hello World! {params.id}</h1>
}