import type { ApiResponse } from "@/types";

const API_BASE = "https://api.slingacademy.com/v1/sample-data/blog-posts";

export async function fetchBlogPosts(offset: number = 0, limit: number = 10): Promise<ApiResponse> {
  try {
    const res = await fetch(`${API_BASE}?offset=${offset}&limit=${limit}`, {
      next: { revalidate: 3600 }, // ISR: revalidate every hour
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    throw error;
  }
}
