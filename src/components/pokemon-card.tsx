import Link from "next/link";
import React from "react";

// 2. Create interface for PokemonCard component and define props

export default function PokemonCard() {
  return (
    <Link href={`/pokemon/${name}`}>
        {name}
    </Link>
  );
}
