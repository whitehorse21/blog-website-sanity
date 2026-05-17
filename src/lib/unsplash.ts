/**
 * Verified Unsplash photo IDs (images.unsplash.com/{id}).
 * IDs are checked with GET before adding — run `npm run seed` to validate.
 */
export const unsplashPhotos = {
  authorElena: "photo-1494790108377-be9c29b29330",
  authorMarcus: "photo-1507003211169-0a1dd7228f2d",
  authorAmara: "photo-1438761681033-6461ffad8d80",
  postInterfaces: "photo-1618005182384-a83a8bd57fbe",
  postJournalism: "photo-1504711434969-e33886168f5c",
  postLisbon: "photo-1555881400-74d7acaacd8b",
  postDesignSystems: "photo-1561070791-2526d30994b5",
  postAiEthics: "photo-1677442136019-21780ecad995",
  postTokyo: "photo-1540959733332-eab4deabeeaf",
  postTypography: "photo-1586281380349-632531db7ed4",
  postFilm: "photo-1526170375885-4d8ecf77b99f",
} as const;

export function unsplashUrl(photoId: string, width = 1200): string {
  return `https://images.unsplash.com/${photoId}?w=${width}&q=80&auto=format&fit=crop`;
}
