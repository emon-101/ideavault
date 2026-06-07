"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Input,
  Card,
  TextArea,
  FieldError,
  Label,
  TextField,
  ListBox,
  Select,
} from "@heroui/react";
import { toast } from "sonner";

const AddIdea = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login first");
      return;
    }

    const formData = new FormData(e.currentTarget);

    const idea = {
      ...Object.fromEntries(formData.entries()),

      userId: user?.id,
      userName: user?.name,
      userEmail: user?.email,
      userImage: user?.image,

      createdAt: new Date(),
    };

    const {data: tokenData} = await authClient.token()

    try {
      const res = await fetch("http://localhost:5000/idea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData.token}`
        },
        body: JSON.stringify(idea),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Idea added successfully!");
        e.target.reset();

        console.log(data);
      } else {
        toast.error("Failed to add idea");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="text-cyan-500 font-medium">Share Innovation</span>

          <h1 className="text-2xl font-bold my-4 text-center">
            Submit Your Idea
          </h1>

          <p className="mt-3 text-default-500 max-w-2xl mx-auto">
            Have an innovative concept? Share it with the community and get
            valuable feedback from fellow innovators.
          </p>
        </div>

        <Card className="border border-default-200 shadow-lg p-6 md:p-8">
          <form onSubmit={onSubmit} className="p-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Idea Title */}
              <div className="md:col-span-2">
                <TextField name="ideaTitle" isRequired>
                  <Label>Idea Title</Label>
                  <Input
                    placeholder="AI-Powered Study Assistant"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Short Description */}
              <div className="md:col-span-2">
                <TextField name="shortDescription" isRequired>
                  <Label>Short Description</Label>
                  <TextArea
                    placeholder="Briefly describe your idea..."
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Detailed Description */}
              <div className="md:col-span-2">
                <TextField name="detailedDescription" isRequired>
                  <Label>Detailed Description</Label>
                  <TextArea
                    placeholder="Explain your idea in detail..."
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Category */}
              <div>
                <Select
                  name="category"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label>Category</Label>

                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Technology" textValue="Technology">
                        Technology
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="AI" textValue="AI">
                        AI
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="Health" textValue="Health">
                        Health
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="Education" textValue="Education">
                        Education
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="Business" textValue="Business">
                        Business
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="Environment" textValue="Environment">
                        Environment
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Estimated Budget */}
              <TextField name="estimatedBudget">
                <Label>Estimated Budget (Optional)</Label>
                <Input
                  type="number"
                  placeholder="5000"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Tags */}
              <div className="md:col-span-2">
                <TextField name="tags">
                  <Label>Tags (Optional)</Label>
                  <Input
                    placeholder="AI, Startup, SaaS, Education"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/idea-image.jpg"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Target Audience */}
              <div className="md:col-span-2">
                <TextField name="targetAudience" isRequired>
                  <Label>Target Audience</Label>
                  <TextArea
                    placeholder="Students, entrepreneurs, developers..."
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Problem Statement */}
              <div className="md:col-span-2">
                <TextField name="problemStatement" isRequired>
                  <Label>Problem Statement</Label>
                  <TextArea
                    placeholder="What problem does your idea solve?"
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Proposed Solution */}
              <div className="md:col-span-2">
                <TextField name="proposedSolution" isRequired>
                  <Label>Proposed Solution</Label>
                  <TextArea
                    placeholder="Describe your solution..."
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            <Button
              type="submit"
              variant="outline"
              className="w-full bg-cyan-500 text-white"
            >
              Submit Idea
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default AddIdea;
