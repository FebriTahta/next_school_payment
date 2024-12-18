import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Login() {
  return (
    <Card className="w-[350px] dark:bg-transparent">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Place your credential here.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Username / NIS</Label>
              <Input id="name" placeholder="....." accept="number" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between items-end">
        <Button className="cursor-pointer ml-auto hover:scale-125">Submit</Button>
      </CardFooter>
    </Card>
  )
}
