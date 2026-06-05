import type { SuccessStory } from "@/data/successStories";

interface SuccessStoryCardProps {
  story: SuccessStory;
}

export function SuccessStoryCard({ story }: SuccessStoryCardProps) {
  return (
    <div>
      <h3>{story.client}</h3>
      <p>{story.problem}</p>
      <span>{story.metric}</span>
    </div>
  );
}
