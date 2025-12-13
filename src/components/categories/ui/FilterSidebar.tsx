'use client';

import { useState } from 'react';
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface FilterOption {
    id: string;
    label: string;
    count?: number;
}

interface FilterGroup {
    id: string;
    label: string;
    options: FilterOption[];
}

interface FilterSidebarProps {
    filters: FilterGroup[];
    activeFilters: Record<string, string[]>; // { [groupId]: [optionId, ...] }
    onFilterChange: (groupId: string, optionId: string) => void;
    className?: string;
}

export function FilterSidebar({ filters, activeFilters, onFilterChange, className }: FilterSidebarProps) {
    return (
        <div className={cn("space-y-8", className)}>
            {filters.map((group) => (
                <div key={group.id}>
                    <h3 className="font-bold text-foreground mb-4">{group.label}</h3>
                    <div className="space-y-2.5">
                        {group.options.map((option) => {
                            const isActive = activeFilters[group.id]?.includes(option.id);

                            return (
                                <label key={option.id} className="flex items-center gap-3 cursor-pointer group">
                                    <div
                                        className={cn(
                                            "w-5 h-5 rounded border border-input flex items-center justify-center transition-colors bg-white",
                                            isActive ? "bg-primary border-primary" : "group-hover:border-primary"
                                        )}
                                        onClick={() => onFilterChange(group.id, option.id)}
                                    >
                                        {isActive && <Check className="w-3.5 h-3.5 text-white" />}
                                    </div>
                                    <span
                                        className={cn("text-sm transition-colors select-none", isActive ? "text-foreground font-medium" : "text-muted-foreground")}
                                        onClick={() => onFilterChange(group.id, option.id)}
                                    >
                                        {option.label}
                                    </span>
                                    {option.count !== undefined && (
                                        <span className="ml-auto text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                                            {option.count}
                                        </span>
                                    )}
                                </label>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}
