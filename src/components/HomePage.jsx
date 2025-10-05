/* File: src/components/HomePage.jsx */
import { ScrollingHomePage } from "./ScrollingHomePage";

/**
 * simple wrapper to match your original structure
 */
export function HomePage({ onPageChange }) {
  return <ScrollingHomePage onPageChange={onPageChange} />;
}
