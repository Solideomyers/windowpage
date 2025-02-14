export interface Show {
  id: number;
  showId: number;
  langId: number;
  name: string;
  desc: string;
  degustationTitle: string | null;
  degustationDesc: string | null;
  lessonTitle: string | null;
  lessonDesc: string | null;
  dinerTitle: string | null;
  dinerDesc: string | null;
  createdAt: string;
  updatedAt: string;
}
