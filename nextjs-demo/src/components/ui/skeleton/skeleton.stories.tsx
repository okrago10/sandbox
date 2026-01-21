import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Skeleton } from "./skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "ui/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => <Skeleton className="h-4 w-[250px]" />,
};

export const Circle: Story = {
  render: () => <Skeleton className="h-12 w-12 rounded-full" />,
};

export const Card: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
};

export const Article: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <Skeleton className="h-[200px] w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  ),
};

export const List: Story = {
  render: () => (
    <div className="space-y-3 w-full max-w-md">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-3 w-3/4" />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Table: Story = {
  render: () => (
    <div className="w-full max-w-lg space-y-3">
      <div className="flex gap-4">
        <Skeleton className="h-8 flex-1" />
        <Skeleton className="h-8 flex-1" />
        <Skeleton className="h-8 flex-1" />
      </div>
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex gap-4">
          <Skeleton className="h-6 flex-1" />
          <Skeleton className="h-6 flex-1" />
          <Skeleton className="h-6 flex-1" />
        </div>
      ))}
    </div>
  ),
};
