import { ReportItem, ReportItemInterface } from './ReportItem.js';

export interface ReportInterface {
  // TODO: gltfValidatorReport
  fileSize: ReportItemInterface;
  triangleCount: ReportItemInterface;
  materialCount: ReportItemInterface; // TODO: confirm that khr_materials_variants are included in the count
  texturesPowerOfTwo: ReportItemInterface;
  dimensionsMax: ReportItemInterface;
  dimensionsMin: ReportItemInterface;
  productDimensionsWithinTolerance: ReportItemInterface;
  getItems: () => ReportItemInterface[];
}

export class Report implements ReportInterface {
  fileSize = new ReportItem('File Size');
  triangleCount = new ReportItem('Triangle Count');
  materialCount = new ReportItem('Material Count');
  texturesPowerOfTwo = new ReportItem('Texture Dimensions are Powers of 2');
  dimensionsMax = new ReportItem('Dimensions Not Too Big');
  dimensionsMin = new ReportItem('Dimensions Not Too Small');
  productDimensionsWithinTolerance = new ReportItem('Dimensions Match Product');
  getItems() {
    return [
      this.fileSize,
      this.triangleCount,
      this.materialCount,
      this.texturesPowerOfTwo,
      this.dimensionsMax,
      this.dimensionsMin,
      this.productDimensionsWithinTolerance,
    ];
  }
}
