export type JellyfinItemType = "Movie" | "Series";

export type JellyfinImageTags = Partial<
  Record<"Primary" | "Banner" | "Logo" | "Thumb" | "Backdrop", string>
>;

export type JellyfinLibraryItem = {
  Id: string;
  ImageTags?: JellyfinImageTags;
  Name: string;
  ProductionYear?: number;
  Tags?: string[];
  Type: JellyfinItemType;
};

export type JellyfinItemsResponse = {
  Items: JellyfinLibraryItem[];
  TotalRecordCount?: number;
};
