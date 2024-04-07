import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function CardWithForm() {
  return (
    
    <Card className="w-[550px]">
      <CardHeader>
        <CardTitle>Add New Task</CardTitle>
        <CardDescription>Add your new task in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Titel</Label>
              <Input id="name" placeholder="Task Titel" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Task Type</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">New</SelectItem>
                  <SelectItem value="sveltekit">Requested</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Discription</Label>
              <textarea
                id="w3review"
                name="w3review"
                rows={2}
                cols={50}
                className="border-[1px]
               border-gray-100 rounded-lg active:border-gray-100 
               forced-colors:border-gray-100"
              ></textarea>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <div className="space-x-2">
          <Popover>
            <PopoverTrigger>
              <Button>Date</Button>
                </PopoverTrigger>
            <PopoverContent>
              <Calendar />
            </PopoverContent>
          </Popover>
          <Button>Deploy</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
