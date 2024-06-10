export async function getDetails(owner, repoName) {
  const url = `https://api.github.com/repos/${owner}/${repoName}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch repository details:", error);
    throw error;
  }
}
