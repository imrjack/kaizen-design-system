import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import * as React from "react"

import { Button } from "@kaizen/component-library"
import { ToggleSwitchField, ToggledStatus } from "@kaizen/draft-form"
import { Badge, BadgeAnimated } from "@kaizen/draft-badge"

export default {
  title: "Badge (React)",
}

const BadgeStoryWrapper: React.FunctionComponent<{
  children: (badgeCount: string, useAnimation: boolean) => void
}> = ({ children }) => {
  const [useAnimation, setUseAnimation] = React.useState(false)
  const [badgeCount, setBadgeCount] = React.useState(1)

  return (
    <div style={{ padding: "20px" }}>
      {children(String(badgeCount), useAnimation)}
      <div style={{ height: "40px" }} />
      <ToggleSwitchField
        toggledStatus={useAnimation ? ToggledStatus.ON : ToggledStatus.OFF}
        onToggle={() => {
          setUseAnimation(s => !s)
        }}
        labelText="Use Animation"
      />
      {useAnimation && (
        <Button
          label="Add Badge Number"
          onClick={() => {
            setBadgeCount(s => s + 1)
          }}
        />
      )}
    </div>
  )
}

export const DefaultStory = () => (
  <BadgeStoryWrapper>
    {(badgeCount, useAnimation) =>
      useAnimation ? (
        <BadgeAnimated variant="default">{badgeCount}</BadgeAnimated>
      ) : (
        <Badge variant="default">{badgeCount}</Badge>
      )
    }
  </BadgeStoryWrapper>
)

DefaultStory.story = {
  name: "Default (Kaizen Site Demo)",
}

export const Active = () => (
  <BadgeStoryWrapper>
    {(badgeCount, useAnimation) =>
      useAnimation ? (
        <BadgeAnimated variant="active">{badgeCount}</BadgeAnimated>
      ) : (
        <Badge variant="active">{badgeCount}</Badge>
      )
    }
  </BadgeStoryWrapper>
)

Active.story = {
  name: "Active",
}

export const Dark = () => (
  <BadgeStoryWrapper>
    {(badgeCount, useAnimation) =>
      useAnimation ? (
        <BadgeAnimated variant="dark">{badgeCount}</BadgeAnimated>
      ) : (
        <Badge variant="dark">{badgeCount}</Badge>
      )
    }
  </BadgeStoryWrapper>
)

Dark.story = {
  name: "Dark",
}

export const Reversed = () => (
  <BadgeStoryWrapper>
    {(badgeCount, useAnimation) =>
      useAnimation ? (
        <BadgeAnimated variant="default" reversed>
          {badgeCount}
        </BadgeAnimated>
      ) : (
        <Badge variant="default" reversed>
          {badgeCount}
        </Badge>
      )
    }
  </BadgeStoryWrapper>
)

Reversed.story = {
  name: "Reversed",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria[700],
        default: true,
      },
    ],
  },
}

export const ReversedActive = () => (
  <BadgeStoryWrapper>
    {(badgeCount, useAnimation) =>
      useAnimation ? (
        <BadgeAnimated variant="active" reversed>
          {badgeCount}
        </BadgeAnimated>
      ) : (
        <Badge variant="active" reversed>
          {badgeCount}
        </Badge>
      )
    }
  </BadgeStoryWrapper>
)

ReversedActive.story = {
  name: "Reversed, Active",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.wisteria[700],
        default: true,
      },
    ],
  },
}

export const LongerText = () => <Badge variant="default">2x</Badge>

LongerText.story = {
  name: "Longer text",
}
