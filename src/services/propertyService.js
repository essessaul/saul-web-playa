import { rentalListings, saleListings } from "../data/mockData";
import { supabase } from "../lib/supabaseClient";

export async function getRentalListings() {
  if (supabase) {
    const { data, error } = await supabase.from("properties").select("*").eq("listing_type", "rental").order("name");
    if (!error && data?.length) return data;
  }
  return rentalListings;
}

export async function getRentalBySlug(slug) {
  if (supabase) {
    const { data, error } = await supabase.from("properties").select("*").eq("slug", slug).single();
    if (!error && data) return data;
  }
  return rentalListings.find((item) => item.slug === slug) || null;
}

export async function getSaleListings() {
  return saleListings;
}

export async function getSaleBySlug(slug) {
  return saleListings.find((item) => item.slug === slug) || null;
}
