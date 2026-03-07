import { BellIcon, CheckIcon, InfoIcon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
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

export const ComponentsShowcase = () => {
	const [switchChecked, setSwitchChecked] = useState(false);
	const [sliderValue, setSliderValue] = useState(50);
	const { t } = useTranslation();

	return (
		<div className="h-full w-full py-8">
			<Tabs defaultValue="inputs" className="w-full">
				<TabsList>
					<TabsTrigger value="inputs">
						{t("components.tabs.inputs")}
					</TabsTrigger>
					<TabsTrigger value="dataDisplay">
						{t("components.tabs.dataDisplay")}
					</TabsTrigger>
					<TabsTrigger value="feedback">
						{t("components.tabs.feedback")}
					</TabsTrigger>
				</TabsList>
				<TabsContent value="inputs">
					<Card>
						<CardHeader>
							<CardTitle>{t("components.inputs.title")}</CardTitle>
							<CardDescription>
								{t("components.inputs.description")}
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="grid w-full max-w-sm items-center gap-1.5">
								<Label htmlFor="email">{t("components.inputs.email")}</Label>
								<Input
									type="email"
									id="email"
									placeholder={t("components.inputs.email")}
								/>
							</div>
							<div className="flex items-center space-x-2">
								<Switch
									id="airplane-mode"
									checked={switchChecked}
									onCheckedChange={setSwitchChecked}
								/>
								<Label htmlFor="airplane-mode">
									{t("components.inputs.airplaneMode")}
								</Label>
							</div>
							<div className="w-full max-w-sm">
								<Slider
									value={[sliderValue]}
									onValueChange={(value) => setSliderValue(value[0])}
									max={100}
									step={1}
								/>
								<p className="mt-2">
									{t("components.inputs.sliderValue", { value: sliderValue })}
								</p>
							</div>
							<div className="flex items-center space-x-2">
								<Checkbox id="terms" />
								<label
									htmlFor="terms"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									{t("components.inputs.acceptTerms")}
								</label>
							</div>
							<RadioGroup defaultValue="option-one">
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="option-one" id="option-one" />
									<Label htmlFor="option-one">
										{t("components.inputs.optionOne")}
									</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="option-two" id="option-two" />
									<Label htmlFor="option-two">
										{t("components.inputs.optionTwo")}
									</Label>
								</div>
							</RadioGroup>
						</CardContent>
						<CardFooter>
							<Button>{t("components.inputs.saveChanges")}</Button>
						</CardFooter>
					</Card>
				</TabsContent>
				<TabsContent value="dataDisplay">
					<Card>
						<CardHeader>
							<CardTitle>{t("components.dataDisplay.title")}</CardTitle>
							<CardDescription>
								{t("components.dataDisplay.description")}
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="flex space-x-2">
								<Avatar>
									<AvatarImage
										src="https://github.com/shadcn.png"
										alt={t("components.dataDisplay.avatarShadcnAlt")}
									/>
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<Avatar>
									<AvatarImage
										src="https://github.com/vercel.png"
										alt={t("components.dataDisplay.avatarVercelAlt")}
									/>
									<AvatarFallback>VC</AvatarFallback>
								</Avatar>
							</div>
							<div className="flex space-x-2">
								<Badge>{t("components.dataDisplay.badgeDefault")}</Badge>
								<Badge variant="secondary">
									{t("components.dataDisplay.badgeSecondary")}
								</Badge>
								<Badge variant="outline">
									{t("components.dataDisplay.badgeOutline")}
								</Badge>
								<Badge variant="destructive">
									{t("components.dataDisplay.badgeDestructive")}
								</Badge>
							</div>
							<Progress value={33} className="w-full" />
							<ScrollArea className="h-25 w-full rounded-md border p-4">
								{t("components.dataDisplay.story")}
							</ScrollArea>
						</CardContent>
					</Card>
				</TabsContent>
				<TabsContent value="feedback">
					<Card>
						<CardHeader>
							<CardTitle>{t("components.feedback.title")}</CardTitle>
							<CardDescription>
								{t("components.feedback.description")}
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<Alert>
								<InfoIcon className="h-4 w-4" />
								<AlertTitle>{t("components.feedback.alertTitle")}</AlertTitle>
								<AlertDescription>
									{t("components.feedback.alertDescription")}
								</AlertDescription>
							</Alert>
							<div className="flex space-x-2">
								<Toggle aria-label={t("components.feedback.toggleBell")}>
									<BellIcon className="h-4 w-4" />
								</Toggle>
								<Toggle
									aria-label={t("components.feedback.toggleCheck")}
									defaultPressed={true}
								>
									<CheckIcon className="h-4 w-4" />
								</Toggle>
							</div>
							<Separator />
							<Select>
								<SelectTrigger className="w-45">
									<SelectValue
										placeholder={t("components.feedback.selectFruit")}
									/>
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="apple">
										{t("components.feedback.apple")}
									</SelectItem>
									<SelectItem value="banana">
										{t("components.feedback.banana")}
									</SelectItem>
									<SelectItem value="blueberry">
										{t("components.feedback.blueberry")}
									</SelectItem>
									<SelectItem value="grapes">
										{t("components.feedback.grapes")}
									</SelectItem>
									<SelectItem value="pineapple">
										{t("components.feedback.pineapple")}
									</SelectItem>
								</SelectContent>
							</Select>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
};
