import classnames from "classnames"
import * as React from "react"

import { Heading } from "@kaizen/component-library"
import {
  Cautionary,
  Informative,
  Negative,
  PositiveFemale,
} from "@kaizen/draft-illustration"

import {
  GenericModal,
  ModalAccessibleDescription,
  ModalAccessibleLabel,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../"

import styles from "./ConfirmationModal.scss"

interface Props {
  readonly isOpen: boolean
  readonly type: ModalType
  readonly title: string
  readonly onConfirm: () => void
  readonly onDismiss: () => void
  readonly confirmLabel?: string
  readonly dismissLabel?: string
  readonly automationId?: string
  readonly children: React.ReactNode
}

type ConfirmationModal = React.FunctionComponent<Props>
type ModalType = "positive" | "informative" | "negative" | "cautionary"

const getIcon = (type: ModalType) => {
  switch (type) {
    case "cautionary":
      return <Cautionary alt="" />
    case "informative":
      return <Informative alt="" />
    case "negative":
      return <Negative alt="" />
    case "positive":
      return <PositiveFemale alt="" />
  }
}

const ConfirmationModal = ({
  isOpen,
  type,
  title,
  onConfirm,
  onDismiss,
  confirmLabel = "Confirm",
  dismissLabel = "Cancel",
  automationId,
  children,
}: Props) => (
  <GenericModal
    isOpen={isOpen}
    onEscapeKeyup={onDismiss}
    onOutsideModalClick={onDismiss}
    automationId={automationId}
  >
    <div className={styles.modal}>
      <ModalHeader unpadded reversed onDismiss={onDismiss}>
        <div
          className={classnames(styles.header, {
            [styles.cautionaryHeader]: type === "cautionary",
            [styles.informativeHeader]: type === "informative",
            [styles.negativeHeader]: type === "negative",
            [styles.positiveHeader]: type === "positive",
          })}
        >
          <div className={styles.iconContainer}>
            <div className={styles.spotIcon}>{getIcon(type)}</div>
          </div>
          <ModalAccessibleLabel>
            <Heading tag="h1" variant="heading-1">
              {title}
            </Heading>
          </ModalAccessibleLabel>
        </div>
      </ModalHeader>
      <ModalBody unpadded>
        <div className={styles.body}>
          <ModalAccessibleDescription>{children}</ModalAccessibleDescription>
        </div>
      </ModalBody>
      <ModalFooter
        actions={[
          { label: confirmLabel, action: onConfirm },
          { label: dismissLabel, action: onDismiss },
        ]}
        appearance={type === "negative" ? "destructive" : "primary"}
        automationId={automationId}
      />
    </div>
  </GenericModal>
)

export default ConfirmationModal
