// layout
import { Box } from "./components/Box";
import { Flex } from "./components/Flex";
// data display
import { Badge } from "./components/Badge";
import { Tag } from "./components/Tag";
// form
import { Button } from "./components/Button";
import { IconButton } from "./components/IconButton";
import { Input } from "./components/Input";
import { Slider } from "./components/Slider";
// others
import { ThemeToggle } from "./ThemeToggle";
import { Spinner } from "./components/Spinner";
import { BellIcon } from "@chakra-ui/icons";
import { Checkbox } from "./components/Checkbox";
import { Label } from "./components/Label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/Tabs";
import { Switch } from "./components/Switch";
import { RadioGroup, Radio } from "./components/Radio";

const App = () => {
  return (
    <Box css={{ maxWidth: 900, m: "2rem auto" }}>
      <ThemeToggle />

      <Flex direction="column" gap="3" css={{ mb: 10 }}>
        <Flex gap="2">
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner />
          <Spinner size="lg" />
          <Spinner size="xl" />
          <Spinner
            loadingCss={{ $$loadingSize: "80px", $$loadingBorder: "6px" }}
          />
        </Flex>
        <Flex gap="2">
          <Button size="xs">Button (xs)</Button>
          <Button size="sm">Button (sm)</Button>
          <Button>button (md)</Button>
          <Button size="lg">button (lg)</Button>
        </Flex>
        <Flex gap="2">
          <Button>Button (solid)</Button>
          <Button variant="outline">Button (outline)</Button>
          <Button variant="ghost">Button (ghost)</Button>
          <Button color="teal">Button</Button>
          <Button color="teal" variant="outline">
            Button
            <BellIcon />
          </Button>
          <Button color="teal" variant="ghost">
            <BellIcon />
            Button
          </Button>
        </Flex>

        <Flex gap="2">
          <IconButton size="xs">
            <BellIcon />
          </IconButton>

          <IconButton size="sm">
            <BellIcon />
          </IconButton>
          <IconButton>
            <BellIcon />
          </IconButton>

          <IconButton size="lg">
            <BellIcon />
          </IconButton>
        </Flex>
      </Flex>

      <Flex direction="column" gap="2">
        <Input
          placeholder="Placeholder"
          labelLeft="Label Left"
          contentRight={<Spinner size="xs" />}
        />

        <Input
          placeholder="Placeholder"
          labelLeft="Label Left"
          invalid
          variant="outline"
          contentRight={<Spinner size="xs" />}
        />
        <Input
          placeholder="Placeholder"
          contentLeft={<BellIcon />}
          variant="filled"
          contentRight={<Spinner size="xs" />}
        />
        <Input
          placeholder="Placeholder"
          variant="filled"
          invalid
          contentRight={<Spinner size="xs" />}
        />
      </Flex>
      <Flex direction="column" gap="3" css={{ mt: 16 }}>
        <Flex direction="column" gap="2">
          <Slider defaultValue={[50]} />
          <Slider defaultValue={[10, 40]} />
        </Flex>

        <Flex gap="2" align="center">
          <Label wrapper>
            <Checkbox size="sm" />
            small check
          </Label>
          <Label wrapper>
            <Checkbox />
            default
          </Label>
          <Label>
            <Checkbox size="lg" />
            lg check
          </Label>
          <Label>
            <Checkbox defaultChecked />
            checked
          </Label>
        </Flex>
        <Flex align="start" gap="3">
          <Switch size="sm" />
          <Label wrapper>
            <Switch />
            switch me
          </Label>
          <Switch size="lg" />
        </Flex>

        <Flex align="start" gap="3">
          <RadioGroup>
             <Radio value="3">Me</Radio> 
             <Radio value="4">You</Radio> 
          </RadioGroup>
        </Flex>

        <Flex gap="2" align="center">
          <Badge>default</Badge>
          <Badge color="green">success </Badge>
          <Badge color="green" variant="outline">
            outline
          </Badge>
          <Badge color="green" variant="solid">
            solid
          </Badge>
          <Badge color="red">removed</Badge>
        </Flex>
        <Flex gap="2" align="start">
          <Tag size="sm">default (sm)</Tag>
          <Tag>default</Tag>
          <Tag size="lg">removed (lg)</Tag>
          <Tag color="green">subtle</Tag>
          <Tag color="green" variant="outline">
            outline
          </Tag>
          <Tag color="green" variant="solid">
            solid
          </Tag>
          <Tag color="green" rounded>
            Plus
          </Tag>
        </Flex>
      </Flex>
      <Box css={{ mt: "$4" }}>
        <Tabs defaultValue="0">
          <TabsList variant="soft-rounded">
            <TabsTrigger value="0">Tab 1</TabsTrigger>
            <TabsTrigger value="1">Tab 2</TabsTrigger>
            <TabsTrigger value="2">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="0">Content 1</TabsContent>
          <TabsContent value="1">Content 2</TabsContent>
          <TabsContent value="2">Content 3</TabsContent>
        </Tabs>
      </Box>
    </Box>
  );
};
export default App;
