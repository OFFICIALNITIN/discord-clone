export async function getFileType(fileUrl: string): Promise<string | null> {
  try {
    const response = await fetch(fileUrl, { method: "HEAD" });
    return response.headers.get("Content-Type");
  } catch (error) {
    console.error("Failed to fetch file type:", error);
    return null;
  }
}
