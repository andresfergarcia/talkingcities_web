"use client";

import { Link } from "@/lib/i18n-link";
import { ChevronRight, Home } from "lucide-react";
import { useTranslations } from "@/lib/i18n-context";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const t = useTranslations("common");
  const safeItems = items ?? [];
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-1.5 text-sm text-text-light flex-wrap">
        <li>
          <Link
            href="/"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">{t("home")}</span>
          </Link>
        </li>
        {safeItems?.map?.((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 text-text-light/50" />
            {item?.href ? (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item?.label ?? ''}
              </Link>
            ) : (
              <span className="text-text font-medium">{item?.label ?? ''}</span>
            )}
          </li>
        )) ?? []}
      </ol>
    </nav>
  );
}
