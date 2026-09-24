import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import {
  profile as defaultProfile,
  stats as defaultStats,
  skillGroups as defaultSkillGroups,
  skillCloud as defaultSkillCloud,
  projects as defaultProjects,
  experience as defaultExperience,
  services as defaultServices,
  research as defaultResearch,
  header as defaultHeader,
  hero as defaultHero,
  aboutCards as defaultAboutCards,
  profileCardExtras as defaultProfileCardExtras,
  contactSection as defaultContactSection,
} from "@/data/portfolio";
import { DEFAULT_THEME_COLORS } from "@/data/themeColors";

const getDefaultData = () => ({
  profile: defaultProfile,
  stats: defaultStats,
  skillGroups: defaultSkillGroups,
  skillCloud: defaultSkillCloud,
  projects: defaultProjects,
  experience: defaultExperience,
  services: defaultServices,
  research: defaultResearch,
  header: defaultHeader,
  hero: defaultHero,
  aboutCards: defaultAboutCards,
  profileCardExtras: defaultProfileCardExtras,
  contactSection: defaultContactSection,
  themeColors: DEFAULT_THEME_COLORS,
});

export async function GET() {
  try {
    const rows = await sql`
      SELECT data, updated_at
      FROM portfolio_state
      WHERE id = 'default'
      LIMIT 1
    `;

    const defaults = getDefaultData();

    if (rows && rows.length > 0 && rows[0].data) {
      const loaded = rows[0].data;
      // Merge with defaults to ensure any new sections are populated
      const merged = {
        ...defaults,
        ...loaded,
        header: { ...defaults.header, ...(loaded.header || {}) },
        hero: {
          ...defaults.hero,
          ...(loaded.hero || {}),
          chips: loaded.hero?.chips && loaded.hero.chips.length > 0 ? loaded.hero.chips : defaults.hero.chips,
          codeSnippet: {
            ...defaults.hero.codeSnippet,
            ...(loaded.hero?.codeSnippet || {}),
          },
        },
        aboutCards:
          Array.isArray(loaded.aboutCards) && loaded.aboutCards.length > 0
            ? loaded.aboutCards
            : defaults.aboutCards,
        profileCardExtras: {
          ...defaults.profileCardExtras,
          ...(loaded.profileCardExtras || {}),
        },
        contactSection: {
          ...defaults.contactSection,
          ...(loaded.contactSection || {}),
        },
        themeColors: {
          ...defaults.themeColors,
          ...(loaded.themeColors || {}),
        },
      };

      return NextResponse.json({
        success: true,
        data: merged,
        updatedAt: rows[0].updated_at,
        source: "neondb",
      });
    }

    // Seed default state into Neon DB
    await sql`
      INSERT INTO portfolio_state (id, data, updated_at)
      VALUES ('default', ${JSON.stringify(defaults)}, NOW())
      ON CONFLICT (id) DO UPDATE
      SET data = EXCLUDED.data, updated_at = NOW()
    `;

    return NextResponse.json({
      success: true,
      data: defaults,
      source: "neondb-seeded",
    });
  } catch (error) {
    console.error("Neon DB portfolio fetch error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch from Neon DB",
        data: getDefaultData(),
        source: "fallback-default",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid portfolio data payload." },
        { status: 400 }
      );
    }

    // Upsert into Neon DB
    await sql`
      INSERT INTO portfolio_state (id, data, updated_at)
      VALUES ('default', ${JSON.stringify(body)}, NOW())
      ON CONFLICT (id) DO UPDATE
      SET data = EXCLUDED.data, updated_at = NOW()
    `;

    return NextResponse.json({
      success: true,
      message: "Portfolio data successfully saved to Neon DB.",
    });
  } catch (error) {
    console.error("Neon DB portfolio save error:", error);
    return NextResponse.json(
      { error: "Failed to save portfolio data to Neon DB." },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    const defaultData = getDefaultData();

    await sql`
      INSERT INTO portfolio_state (id, data, updated_at)
      VALUES ('default', ${JSON.stringify(defaultData)}, NOW())
      ON CONFLICT (id) DO UPDATE
      SET data = EXCLUDED.data, updated_at = NOW()
    `;

    return NextResponse.json({
      success: true,
      message: "Portfolio state reset to defaults in Neon DB.",
      data: defaultData,
    });
  } catch (error) {
    console.error("Neon DB portfolio reset error:", error);
    return NextResponse.json(
      { error: "Failed to reset portfolio data." },
      { status: 500 }
    );
  }
}
