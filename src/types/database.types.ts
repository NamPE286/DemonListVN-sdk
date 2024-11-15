export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      achievement: {
        Row: {
          id: number
          image: string | null
          name: string
          timestamp: number
        }
        Insert: {
          id?: number
          image?: string | null
          name?: string
          timestamp?: number
        }
        Update: {
          id?: number
          image?: string | null
          name?: string
          timestamp?: number
        }
        Relationships: []
      }
      APIKey: {
        Row: {
          created_at: string
          key: string
          uid: string
        }
        Insert: {
          created_at?: string
          key?: string
          uid: string
        }
        Update: {
          created_at?: string
          key?: string
          uid?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_APIKey_uid_fkey"
            columns: ["uid"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["uid"]
          },
        ]
      }
      changelogs: {
        Row: {
          created_at: string
          id: number
          levelID: number
          new: Json
          old: Json | null
          published: boolean | null
        }
        Insert: {
          created_at?: string
          id?: number
          levelID: number
          new: Json
          old?: Json | null
          published?: boolean | null
        }
        Update: {
          created_at?: string
          id?: number
          levelID?: number
          new?: Json
          old?: Json | null
          published?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "changelogs_levelID_fkey"
            columns: ["levelID"]
            isOneToOne: false
            referencedRelation: "levels"
            referencedColumns: ["id"]
          },
        ]
      }
      clanBan: {
        Row: {
          clan: number
          created_at: string
          userid: string
        }
        Insert: {
          clan: number
          created_at?: string
          userid: string
        }
        Update: {
          clan?: number
          created_at?: string
          userid?: string
        }
        Relationships: [
          {
            foreignKeyName: "clanBan_clan_fkey"
            columns: ["clan"]
            isOneToOne: false
            referencedRelation: "clans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clanBan_userid_fkey"
            columns: ["userid"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["uid"]
          },
        ]
      }
      clanInvitations: {
        Row: {
          clan: number
          created_at: string
          id: number
          to: string
        }
        Insert: {
          clan: number
          created_at?: string
          id?: number
          to: string
        }
        Update: {
          clan?: number
          created_at?: string
          id?: number
          to?: string
        }
        Relationships: [
          {
            foreignKeyName: "clanInvitations_clan_fkey"
            columns: ["clan"]
            isOneToOne: false
            referencedRelation: "clans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clanInvitations_to_fkey"
            columns: ["to"]
            isOneToOne: true
            referencedRelation: "players"
            referencedColumns: ["uid"]
          },
        ]
      }
      clans: {
        Row: {
          created_at: string
          id: number
          isPublic: boolean
          memberCount: number
          memberLimit: number
          name: string
          owner: string
          rank: number | null
          rating: number
          tag: string
          tagBgColor: string | null
          tagTextColor: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          isPublic?: boolean
          memberCount?: number
          memberLimit?: number
          name: string
          owner?: string
          rank?: number | null
          rating?: number
          tag: string
          tagBgColor?: string | null
          tagTextColor?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          isPublic?: boolean
          memberCount?: number
          memberLimit?: number
          name?: string
          owner?: string
          rank?: number | null
          rating?: number
          tag?: string
          tagBgColor?: string | null
          tagTextColor?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clans_owner_fkey"
            columns: ["owner"]
            isOneToOne: true
            referencedRelation: "players"
            referencedColumns: ["uid"]
          },
        ]
      }
      deathCount: {
        Row: {
          completedTime: string | null
          count: number[]
          levelID: number
          uid: string
        }
        Insert: {
          completedTime?: string | null
          count: number[]
          levelID?: number
          uid: string
        }
        Update: {
          completedTime?: string | null
          count?: number[]
          levelID?: number
          uid?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_deathCount_uid_fkey"
            columns: ["uid"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["uid"]
          },
        ]
      }
      eventProofs: {
        Row: {
          accepted: boolean
          content: string
          created_at: string
          eventID: number
          userid: string
        }
        Insert: {
          accepted?: boolean
          content: string
          created_at?: string
          eventID: number
          userid: string
        }
        Update: {
          accepted?: boolean
          content?: string
          created_at?: string
          eventID?: number
          userid?: string
        }
        Relationships: [
          {
            foreignKeyName: "eventProofs_eventID_fkey"
            columns: ["eventID"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "eventProofs_userid_fkey"
            columns: ["userid"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["uid"]
          },
        ]
      }
      events: {
        Row: {
          content: string | null
          created_at: string
          description: string
          end: string | null
          exp: number | null
          id: number
          imgUrl: string
          redirect: string | null
          start: string
          title: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          description: string
          end?: string | null
          exp?: number | null
          id?: number
          imgUrl: string
          redirect?: string | null
          start: string
          title: string
        }
        Update: {
          content?: string | null
          created_at?: string
          description?: string
          end?: string | null
          exp?: number | null
          id?: number
          imgUrl?: string
          redirect?: string | null
          start?: string
          title?: string
        }
        Relationships: []
      }
      heatmap: {
        Row: {
          days: number[]
          uid: string
          year: number
        }
        Insert: {
          days: number[]
          uid: string
          year: number
        }
        Update: {
          days?: number[]
          uid?: string
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_attempts_uid_fkey"
            columns: ["uid"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["uid"]
          },
        ]
      }
      levelDeathCount: {
        Row: {
          count: number[]
          levelID: number
        }
        Insert: {
          count: number[]
          levelID?: number
        }
        Update: {
          count?: number[]
          levelID?: number
        }
        Relationships: []
      }
      levels: {
        Row: {
          avgSuggestedRating: number | null
          created_at: string
          creator: string | null
          dlPt: number | null
          dlTop: number | null
          flPt: number | null
          flTop: number | null
          id: number
          minProgress: number | null
          name: string | null
          rating: number | null
          songID: number | null
          videoID: string | null
        }
        Insert: {
          avgSuggestedRating?: number | null
          created_at?: string
          creator?: string | null
          dlPt?: number | null
          dlTop?: number | null
          flPt?: number | null
          flTop?: number | null
          id: number
          minProgress?: number | null
          name?: string | null
          rating?: number | null
          songID?: number | null
          videoID?: string | null
        }
        Update: {
          avgSuggestedRating?: number | null
          created_at?: string
          creator?: string | null
          dlPt?: number | null
          dlTop?: number | null
          flPt?: number | null
          flTop?: number | null
          id?: number
          minProgress?: number | null
          name?: string | null
          rating?: number | null
          songID?: number | null
          videoID?: string | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          content: string | null
          id: number
          redirect: string | null
          status: number
          timestamp: string
          to: string
        }
        Insert: {
          content?: string | null
          id?: number
          redirect?: string | null
          status?: number
          timestamp?: string
          to: string
        }
        Update: {
          content?: string | null
          id?: number
          redirect?: string | null
          status?: number
          timestamp?: string
          to?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_to_fkey"
            columns: ["to"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["uid"]
          },
        ]
      }
      players: {
        Row: {
          avatar: string | null
          city: string | null
          clan: number | null
          discord: string | null
          dlMaxPt: number | null
          dlrank: number | null
          email: string | null
          exp: number
          extraExp: number | null
          facebook: string | null
          flMaxPt: number | null
          flrank: number | null
          id: number
          isAdmin: boolean
          isBanned: boolean
          isHidden: boolean
          isTrusted: boolean
          name: string
          overallRank: number | null
          province: string | null
          rating: number | null
          recordCount: number
          renameCooldown: string
          reviewCooldown: string | null
          totalDLpt: number | null
          totalFLpt: number | null
          uid: string
          youtube: string | null
        }
        Insert: {
          avatar?: string | null
          city?: string | null
          clan?: number | null
          discord?: string | null
          dlMaxPt?: number | null
          dlrank?: number | null
          email?: string | null
          exp?: number
          extraExp?: number | null
          facebook?: string | null
          flMaxPt?: number | null
          flrank?: number | null
          id?: number
          isAdmin?: boolean
          isBanned?: boolean
          isHidden?: boolean
          isTrusted?: boolean
          name: string
          overallRank?: number | null
          province?: string | null
          rating?: number | null
          recordCount?: number
          renameCooldown?: string
          reviewCooldown?: string | null
          totalDLpt?: number | null
          totalFLpt?: number | null
          uid?: string
          youtube?: string | null
        }
        Update: {
          avatar?: string | null
          city?: string | null
          clan?: number | null
          discord?: string | null
          dlMaxPt?: number | null
          dlrank?: number | null
          email?: string | null
          exp?: number
          extraExp?: number | null
          facebook?: string | null
          flMaxPt?: number | null
          flrank?: number | null
          id?: number
          isAdmin?: boolean
          isBanned?: boolean
          isHidden?: boolean
          isTrusted?: boolean
          name?: string
          overallRank?: number | null
          province?: string | null
          rating?: number | null
          recordCount?: number
          renameCooldown?: string
          reviewCooldown?: string | null
          totalDLpt?: number | null
          totalFLpt?: number | null
          uid?: string
          youtube?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "players_clan_fkey"
            columns: ["clan"]
            isOneToOne: false
            referencedRelation: "clans"
            referencedColumns: ["id"]
          },
        ]
      }
      playersAchievement: {
        Row: {
          achievementid: number
          id: number
          timestamp: number | null
          userid: string
        }
        Insert: {
          achievementid: number
          id?: number
          timestamp?: number | null
          userid: string
        }
        Update: {
          achievementid?: number
          id?: number
          timestamp?: number | null
          userid?: string
        }
        Relationships: [
          {
            foreignKeyName: "playersAchievement_achievementid_fkey"
            columns: ["achievementid"]
            isOneToOne: false
            referencedRelation: "achievement"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "playersAchievement_userid_fkey"
            columns: ["userid"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["uid"]
          },
        ]
      }
      PVPPlayers: {
        Row: {
          joined_at: string | null
          player: string
          room: number
        }
        Insert: {
          joined_at?: string | null
          player: string
          room: number
        }
        Update: {
          joined_at?: string | null
          player?: string
          room?: number
        }
        Relationships: [
          {
            foreignKeyName: "PVPPlayers_player_fkey"
            columns: ["player"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["uid"]
          },
          {
            foreignKeyName: "PVPPlayers_room_fkey"
            columns: ["room"]
            isOneToOne: false
            referencedRelation: "PVPRooms"
            referencedColumns: ["id"]
          },
        ]
      }
      PVPRooms: {
        Row: {
          averageRating: number
          created_at: string
          host: string | null
          id: number
          isPublic: boolean
          name: string
          playerCount: number
        }
        Insert: {
          averageRating?: number
          created_at?: string
          host?: string | null
          id?: number
          isPublic?: boolean
          name: string
          playerCount?: number
        }
        Update: {
          averageRating?: number
          created_at?: string
          host?: string | null
          id?: number
          isPublic?: boolean
          name?: string
          playerCount?: number
        }
        Relationships: [
          {
            foreignKeyName: "PVPRoom_host_fkey"
            columns: ["host"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["uid"]
          },
        ]
      }
      records: {
        Row: {
          comment: string | null
          dlPt: number | null
          flPt: number | null
          isChecked: boolean | null
          levelid: number
          mobile: boolean
          needMod: boolean
          no: number | null
          progress: number | null
          raw: string | null
          refreshRate: number | null
          reviewer: string | null
          reviewerComment: string | null
          suggestedRating: number | null
          timestamp: number | null
          userid: string
          videoLink: string | null
        }
        Insert: {
          comment?: string | null
          dlPt?: number | null
          flPt?: number | null
          isChecked?: boolean | null
          levelid: number
          mobile?: boolean
          needMod?: boolean
          no?: number | null
          progress?: number | null
          raw?: string | null
          refreshRate?: number | null
          reviewer?: string | null
          reviewerComment?: string | null
          suggestedRating?: number | null
          timestamp?: number | null
          userid: string
          videoLink?: string | null
        }
        Update: {
          comment?: string | null
          dlPt?: number | null
          flPt?: number | null
          isChecked?: boolean | null
          levelid?: number
          mobile?: boolean
          needMod?: boolean
          no?: number | null
          progress?: number | null
          raw?: string | null
          refreshRate?: number | null
          reviewer?: string | null
          reviewerComment?: string | null
          suggestedRating?: number | null
          timestamp?: number | null
          userid?: string
          videoLink?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_records_levelid_fkey"
            columns: ["levelid"]
            isOneToOne: false
            referencedRelation: "levels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_records_userid_fkey"
            columns: ["userid"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["uid"]
          },
          {
            foreignKeyName: "records_reviewer_fkey"
            columns: ["reviewer"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["uid"]
          },
        ]
      }
      userSocial: {
        Row: {
          created_at: string
          id: string
          isVisible: boolean
          name: string | null
          platform: string
          userid: string
        }
        Insert: {
          created_at?: string
          id: string
          isVisible?: boolean
          name?: string | null
          platform: string
          userid: string
        }
        Update: {
          created_at?: string
          id?: string
          isVisible?: boolean
          name?: string | null
          platform?: string
          userid?: string
        }
        Relationships: [
          {
            foreignKeyName: "userSocial_userid_fkey"
            columns: ["userid"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["uid"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      updateList: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      updateRank: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
