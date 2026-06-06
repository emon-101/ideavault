"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { RiEditLine } from "react-icons/ri";
import { toast } from "sonner";

const EditIdeaModal = ({ idea, refetch }) => {
  const {
    _id,
    ideaTitle,
    shortDescription,
    detailedDescription,
    category,
    estimatedBudget,
    tags,
    imageUrl,
    targetAudience,
    problemStatement,
    proposedSolution,
  } = idea;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updatedIdea = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(
        `http://localhost:5000/idea/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedIdea),
        }
      );

      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success("Idea updated successfully");
        refetch();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update idea");
    }
  };

  return (
    <Modal>
      <Button variant="outline">
        <RiEditLine />
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>Update Idea</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                  onSubmit={onSubmit}
                  className="space-y-8 p-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Idea Title */}
                    <div className="md:col-span-2">
                      <TextField
                        name="ideaTitle"
                        defaultValue={ideaTitle}
                        isRequired
                      >
                        <Label>Idea Title</Label>
                        <Input />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Short Description */}
                    <div className="md:col-span-2">
                      <TextField
                        name="shortDescription"
                        defaultValue={shortDescription}
                        isRequired
                      >
                        <Label>Short Description</Label>
                        <TextArea />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Detailed Description */}
                    <div className="md:col-span-2">
                      <TextField
                        name="detailedDescription"
                        defaultValue={detailedDescription}
                        isRequired
                      >
                        <Label>Detailed Description</Label>
                        <TextArea />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Category */}
                    <div>
                      <Select
                        name="category"
                        defaultValue={category}
                        placeholder="Select Category"
                      >
                        <Label>Category</Label>

                        <Select.Trigger>
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item
                              id="Technology"
                              textValue="Technology"
                            >
                              Technology
                            </ListBox.Item>

                            <ListBox.Item
                              id="AI"
                              textValue="AI"
                            >
                              AI
                            </ListBox.Item>

                            <ListBox.Item
                              id="Health"
                              textValue="Health"
                            >
                              Health
                            </ListBox.Item>

                            <ListBox.Item
                              id="Education"
                              textValue="Education"
                            >
                              Education
                            </ListBox.Item>

                            <ListBox.Item
                              id="Business"
                              textValue="Business"
                            >
                              Business
                            </ListBox.Item>

                            <ListBox.Item
                              id="Environment"
                              textValue="Environment"
                            >
                              Environment
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Budget */}
                    <TextField
                      name="estimatedBudget"
                      defaultValue={estimatedBudget}
                    >
                      <Label>Estimated Budget</Label>
                      <Input type="number" />
                    </TextField>

                    {/* Tags */}
                    <div className="md:col-span-2">
                      <TextField
                        name="tags"
                        defaultValue={tags}
                      >
                        <Label>Tags</Label>
                        <Input />
                      </TextField>
                    </div>

                    {/* Image URL */}
                    <div className="md:col-span-2">
                      <TextField
                        name="imageUrl"
                        defaultValue={imageUrl}
                        isRequired
                      >
                        <Label>Image URL</Label>
                        <Input type="url" />
                      </TextField>
                    </div>

                    {/* Target Audience */}
                    <div className="md:col-span-2">
                      <TextField
                        name="targetAudience"
                        defaultValue={targetAudience}
                        isRequired
                      >
                        <Label>Target Audience</Label>
                        <TextArea />
                      </TextField>
                    </div>

                    {/* Problem Statement */}
                    <div className="md:col-span-2">
                      <TextField
                        name="problemStatement"
                        defaultValue={problemStatement}
                        isRequired
                      >
                        <Label>Problem Statement</Label>
                        <TextArea />
                      </TextField>
                    </div>

                    {/* Proposed Solution */}
                    <div className="md:col-span-2">
                      <TextField
                        name="proposedSolution"
                        defaultValue={proposedSolution}
                        isRequired
                      >
                        <Label>Proposed Solution</Label>
                        <TextArea />
                      </TextField>
                    </div>
                  </div>

                  <Modal.Footer>
                    <Button
                      slot="close"
                      variant="secondary"
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      slot="close"
                    >
                      Update Idea
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditIdeaModal;