import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toggle } from "@/components/ui/toggle";
import { createLazyFileRoute } from "@tanstack/react-router";
import { BellIcon, CheckIcon, InfoIcon } from "lucide-react";
import { useState } from "react";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	const [switchChecked, setSwitchChecked] = useState(false);
	const [sliderValue, setSliderValue] = useState(50);

	return (
		<div className="h-full w-full py-8">
			<Tabs defaultValue="inputs" className="w-full">
				<TabsList>
					<TabsTrigger value="inputs">Inputs</TabsTrigger>
					<TabsTrigger value="dataDisplay">Data Display</TabsTrigger>
					<TabsTrigger value="feedback">Feedback</TabsTrigger>
				</TabsList>
				<TabsContent value="inputs">
					<Card>
						<CardHeader>
							<CardTitle>Input Components</CardTitle>
							<CardDescription>
								Various input components from shadcn/ui
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="grid w-full max-w-sm items-center gap-1.5">
								<Label htmlFor="email">Email</Label>
								<Input type="email" id="email" placeholder="Email" />
							</div>
							<div className="flex items-center space-x-2">
								<Switch
									id="airplane-mode"
									checked={switchChecked}
									onCheckedChange={setSwitchChecked}
								/>
								<Label htmlFor="airplane-mode">Airplane Mode</Label>
							</div>
							<div className="w-full max-w-sm">
								<Slider
									value={[sliderValue]}
									onValueChange={(value) => setSliderValue(value[0])}
									max={100}
									step={1}
								/>
								<p className="mt-2">Slider value: {sliderValue}</p>
							</div>
							<div className="flex items-center space-x-2">
								<Checkbox id="terms" />
								<label
									htmlFor="terms"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Accept terms and conditions
								</label>
							</div>
							<RadioGroup defaultValue="option-one">
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="option-one" id="option-one" />
									<Label htmlFor="option-one">Option One</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="option-two" id="option-two" />
									<Label htmlFor="option-two">Option Two</Label>
								</div>
							</RadioGroup>
						</CardContent>
						<CardFooter>
							<Button>Save changes</Button>
						</CardFooter>
					</Card>
				</TabsContent>
				<TabsContent value="dataDisplay">
					<Card>
						<CardHeader>
							<CardTitle>Data Display Components</CardTitle>
							<CardDescription>Components for displaying data</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="flex space-x-2">
								<Avatar>
									<AvatarImage
										src="https://github.com/shadcn.png"
										alt="@shadcn"
									/>
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<Avatar>
									<AvatarImage
										src="https://github.com/vercel.png"
										alt="@vercel"
									/>
									<AvatarFallback>VC</AvatarFallback>
								</Avatar>
							</div>
							<div className="flex space-x-2">
								<Badge>Default</Badge>
								<Badge variant="secondary">Secondary</Badge>
								<Badge variant="outline">Outline</Badge>
								<Badge variant="destructive">Destructive</Badge>
							</div>
							<Progress value={33} className="w-full" />
							<ScrollArea className="h-[100px] w-full rounded-md border p-4">
								Jokester began sneaking into the castle in the middle of the
								night and leaving jokes all over the place: under the king's
								pillow, in his soup, even in the royal toilet. The king was
								furious, but he couldn't seem to catch the jokester. And the
								worst part was, the king was starting to find the jokes funny.
								He fought hard to maintain a straight face, but it was getting
								harder and harder. The people of the kingdom noticed the king's
								new good mood, and they were all much happier for it.
							</ScrollArea>
						</CardContent>
					</Card>
				</TabsContent>
				<TabsContent value="feedback">
					<Card>
						<CardHeader>
							<CardTitle>Feedback Components</CardTitle>
							<CardDescription>
								Components for user feedback and notifications
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<Alert>
								<InfoIcon className="h-4 w-4" />
								<AlertTitle>Heads up!</AlertTitle>
								<AlertDescription>
									You can add components to your app using the cli.
								</AlertDescription>
							</Alert>
							<div className="flex space-x-2">
								<Toggle aria-label="Toggle italic">
									<BellIcon className="h-4 w-4" />
								</Toggle>
								<Toggle aria-label="Toggle italic" defaultPressed={true}>
									<CheckIcon className="h-4 w-4" />
								</Toggle>
							</div>
							<Separator />
							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Select a fruit" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="banana">Banana</SelectItem>
									<SelectItem value="blueberry">Blueberry</SelectItem>
									<SelectItem value="grapes">Grapes</SelectItem>
									<SelectItem value="pineapple">Pineapple</SelectItem>
								</SelectContent>
							</Select>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
