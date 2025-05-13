import { NextResponse } from "next/server";
import { db } from "./auth";
import { collection, getDocs } from "firebase/firestore";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url); // Extract query params
    const name = searchParams.get("name");

    if (!name) {
      return NextResponse.json({ error: "Collection name is required" }, { status: 400 });
    }

    const colRef = collection(db, name);
    const snapshot = await getDocs(colRef);

    if (snapshot.empty) {
      return NextResponse.json({ error: "No documents found in collection" }, { status: 404 });
    }

    const docData = snapshot.docs[0].data();
    const pdfLink = Object.values(docData)[0];

    if (!pdfLink) {
      return NextResponse.json({ error: "No PDF link found" }, { status: 404 });
    }

    return NextResponse.json({ pdfLink }, { status: 200 });

  } catch (error) {
    console.error("Error fetching PDF link:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}