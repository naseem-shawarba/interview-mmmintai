/**
 * Process step items
 */
export interface ProcessItem {
  /**
   * Enum of different process types
   */
  type: string

  /**
   * The title of the process step
   */
  title: string

  /**
   * The timestamp of the process initiation
   */
  timestamp: string

  /**
   * A name of the contact person for the process step
   */
  contact: string

  /**
   * A status enum of the process step
   */
  status: string

  /**
   * Where is the process step happening
   */
  location: string

  /**
   * Additional comment of the user
   */
  comment?: string

  /**
   * Optional: External reference id, can be from a 3rd party system or internal note for the process step
   */
  referenceId?: string
}
