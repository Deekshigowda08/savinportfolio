import { NextResponse } from "next/server";
import { db } from "../auth";
import { collection, getDocs } from "firebase/firestore";

export async function GET(req) {
  try {
    
    const names =["posters&flyers", "printdesigns", "rondomworks","socialmediaposter","weblayoutdesign"];

    if (!names.length) {
      return NextResponse.json({ error: "At least one collection name is required" }, { status: 400 });
    }

    let results = {};

    for (const name of names) {
      const colRef = collection(db, name);
      const snapshot = await getDocs(colRef);

      results[name] = snapshot.empty
        ? []
        : snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
    }

    return NextResponse.json({ collections: results }, { status: 200 });

  } catch (error) {
    console.error("Error fetching collections:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}