import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Separator } from "./separator";

const meta: Meta<typeof Separator> = {
  title: "ui/Separator",
  component: Separator,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Title</h4>
        <p className="text-sm text-muted-foreground">Description text here.</p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Another Section</h4>
        <p className="text-sm text-muted-foreground">More content below.</p>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <span>Home</span>
      <Separator orientation="vertical" />
      <span>About</span>
      <Separator orientation="vertical" />
      <span>Contact</span>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="w-full max-w-sm rounded-lg border p-4">
      <h3 className="font-semibold">Card Title</h3>
      <Separator className="my-3" />
      <p className="text-sm text-muted-foreground">Card content goes here with more details.</p>
    </div>
  ),
};
