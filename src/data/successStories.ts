export interface SuccessStory {
  id: string;
  client: string;
  problem: string;
  problemEs: string;
  impact: string;
  impactEs: string;
  metric: string;
  metricLabel: string;
  metricLabelEs: string;
  image: string;
}

export const successStories: SuccessStory[] = [];
