export interface PartnerInterface {
  id: string;
  type: { id: string | number; description: string };
  firstName: string;
  lastName: string;
  language: { id: number | string; name: string };
  country: { id: number | string; name: string };
  characterAge: number;
  characterGender: string;
  getToKnowMe: string;
  seriesId: string;
  seriesDescription: string;
  characterWindowImage: string;
  bookCharacterOImage: string;
  bookCharacterTImage: string;
  url: { name: string; icon: string; link: string }[];
  function: {
    function: { id: string | number; description: string };
    bio: string;
    image: string;
  }[];
  organizations: {
    salesOrganization: { id: string | number; description: string };
    distributionChannel: { id: string | number; description: string };
    divisions: { id: string | number; description: string };
  }[];
  titles: {
    id: number;
    title: string;
    language: { id: number | string; name: string };
    country: { id: number | string; name: string };
    publishDate: string;
  }[];
  socials: {
    fb: string;
    twitter: string;
    linkedIn: string;
  };
  contacts?: { type: string; description: string; value: string }[];
}
