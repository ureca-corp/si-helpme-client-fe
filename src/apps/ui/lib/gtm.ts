"use client";

import { sendGTMEvent } from "@next/third-parties/google";

export type GtmEventName = "PageView" | "Schedule" | "Contact" | "Lead";

export function sendPageView(url?: string) {
  try {
    sendGTMEvent({ event: "PageView", ...(url ? { page_path: url } : {}) });
  } catch (error) {
    // no-op
  }
}

export function sendSchedule(payload?: Record<string, unknown>) {
  try {
    sendGTMEvent({ event: "Schedule", ...(payload || {}) });
  } catch (error) {
    // no-op
  }
}

export function sendContact(payload?: Record<string, unknown>) {
  try {
    sendGTMEvent({ event: "Contact", ...(payload || {}) });
  } catch (error) {
    // no-op
  }
}

export function sendLead(payload?: Record<string, unknown>) {
  try {
    sendGTMEvent({ event: "Lead", ...(payload || {}) });
  } catch (error) {
    // no-op
  }
}
