export interface ImageInt {
  asset: {
    altText: string | null;
    url: string;
    metadata: {
      dimensions: {
        width: number;
        height: number;
      };
    };
  };
}
