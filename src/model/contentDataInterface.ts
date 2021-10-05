interface Version {
  title_edition: string;
  title_country: {
    id: string;
    name: string;
  };
  title_language_code: {
    id: string;
    name: string;
  };
  content_format: number;
  file_format: number;
  divison: {
    id: number;
    description: string;
  };
}

export interface ContentDataInterface {
  publisher: string;
  title_id: number;
  title: string;
  external_title_id: number;
  original_language_code: {
    id: string;
    name: string;
  };
  title_series_id: number;
  title_episode_id: number;
  title_age_group: number;
  title_grade: number;
  version: Version[];
  synopsis: string;
}

export interface ISBNContentInterface {
  copyrightYear: string;
  yearPublished: string;
  ISBN10: string;
  ISBN13: string;
  digitalDimension: {
    w: string;
    h: string;
  };
  printDimension: {
    w: string;
    h: string;
    d: string;
  };
  lccn: string;
  volumeSeries: string;
  barcode: string;
}

export interface PartnerContentInterface {
  type: string;
  id: string;
  function: string;
  firstName: string;
  lastName: string;
  company: string;
}
