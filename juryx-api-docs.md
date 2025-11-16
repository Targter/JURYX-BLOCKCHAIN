# JURYX-BLOCKCHAIN API Endpoint Documentation

## 📋 Table of Contents
1. [Overview](#overview)
2. [Base URL](#base-url)
3. [Authentication](#authentication)
4. [API Endpoints](#api-endpoints)
5. [Data Models](#data-models)
6. [Error Handling](#error-handling)
7. [Architecture Diagram](#architecture-diagram)

---

## Overview

JURYX-BLOCKCHAIN is a Next.js-based hackathon management and judging platform with blockchain integration. This document provides comprehensive API endpoint documentation.

**Tech Stack:**
- Framework: Next.js (React)
- Database: Prisma ORM
- Authentication: Clerk
- Blockchain: Ethereum/Smart Contracts
- File Storage: Multipart file uploads

---

## Base URL

```
Development: http://localhost:3000/api
Production: https://your-domain.com/api
```

---

## Authentication

Most endpoints require authentication via Clerk. Include the session token in headers:

```http
Authorization: Bearer <your_clerk_session_token>
```

---

## API Endpoints

### 1. Events Management

#### 1.1 List All Events
```http
GET /api/events
```

**Query Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number (default: 1) |
| `limit` | integer | No | Items per page (default: 10) |
| `status` | string | No | Filter by status: `upcoming`, `active`, `completed` |

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "events": [
      {
        "id": "evt_123456",
        "title": "Web3 Hackathon 2025",
        "description": "Build the future of decentralized apps",
        "startDate": "2025-01-15T00:00:00Z",
        "endDate": "2025-01-17T23:59:59Z",
        "status": "active",
        "maxTeams": 50,
        "registeredTeams": 32,
        "blockchain": {
          "contractAddress": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
          "network": "ethereum-sepolia"
        },
        "createdAt": "2024-12-01T10:00:00Z"
      }
    ],
    "pagination": {
      "total": 45,
      "page": 1,
      "limit": 10,
      "pages": 5
    }
  }
}
```

---

#### 1.2 Create Event
```http
POST /api/events
```

**Authentication:** Required (Organizer role)

**Request Body:**
```json
{
  "title": "AI Innovation Hackathon",
  "description": "48-hour AI hackathon",
  "startDate": "2025-02-01T00:00:00Z",
  "endDate": "2025-02-03T23:59:59Z",
  "maxTeams": 100,
  "prizes": {
    "first": "10000",
    "second": "5000",
    "third": "2500"
  },
  "judging": {
    "criteria": ["innovation", "technical", "presentation", "impact"],
    "weights": [0.3, 0.3, 0.2, 0.2]
  }
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "eventId": "evt_789012",
    "title": "AI Innovation Hackathon",
    "blockchainTx": "0x1a2b3c4d5e6f7890abcdef",
    "smartContractAddress": "0x123..."
  }
}
```

---

#### 1.3 Get Event Details
```http
GET /api/events/{eventId}
```

**Path Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `eventId` | string | Yes | Unique event identifier |

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "evt_123456",
    "title": "Web3 Hackathon 2025",
    "description": "Build the future of decentralized apps",
    "startDate": "2025-01-15T00:00:00Z",
    "endDate": "2025-01-17T23:59:59Z",
    "status": "active",
    "organizer": {
      "id": "user_org_001",
      "name": "Tech Foundation",
      "email": "contact@techfoundation.org"
    },
    "teams": [
      {
        "teamId": "team_001",
        "teamName": "Code Warriors",
        "members": 4
      }
    ],
    "judges": [
      {
        "judgeId": "judge_001",
        "name": "Dr. Jane Smith",
        "expertise": "Blockchain Architecture"
      }
    ]
  }
}
```

---

#### 1.4 Update Event
```http
PUT /api/events/{eventId}
```

**Authentication:** Required (Organizer)

**Request Body:**
```json
{
  "title": "Updated Event Title",
  "description": "Updated description",
  "status": "completed"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "eventId": "evt_123456",
    "updated": true,
    "blockchainTx": "0xabc123..."
  }
}
```

---

#### 1.5 Delete Event
```http
DELETE /api/events/{eventId}
```

**Authentication:** Required (Admin only)

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Event deleted successfully"
}
```

---

### 2. Teams Management

#### 2.1 List Teams
```http
GET /api/teams
```

**Query Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `eventId` | string | No | Filter by event |
| `page` | integer | No | Page number |

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "teams": [
      {
        "id": "team_001",
        "name": "Code Warriors",
        "eventId": "evt_123456",
        "members": [
          {
            "userId": "user_001",
            "name": "John Doe",
            "role": "Team Leader",
            "email": "john@example.com"
          }
        ],
        "submissionStatus": "submitted",
        "createdAt": "2025-01-10T10:00:00Z"
      }
    ]
  }
}
```

---

#### 2.2 Create Team
```http
POST /api/teams
```

**Authentication:** Required

**Request Body:**
```json
{
  "name": "Innovation Squad",
  "eventId": "evt_123456",
  "members": [
    {
      "userId": "user_001",
      "role": "Team Leader"
    },
    {
      "userId": "user_002",
      "role": "Developer"
    }
  ]
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "teamId": "team_002",
    "name": "Innovation Squad",
    "inviteCode": "INV-ABC123",
    "blockchainTx": "0xdef456..."
  }
}
```

---

#### 2.3 Get Team Details
```http
GET /api/teams/{teamId}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "team_001",
    "name": "Code Warriors",
    "event": {
      "id": "evt_123456",
      "title": "Web3 Hackathon 2025"
    },
    "members": [...],
    "submissions": [
      {
        "id": "sub_001",
        "projectName": "DeFi Dashboard",
        "submittedAt": "2025-01-17T20:00:00Z"
      }
    ],
    "scores": {
      "total": 87.5,
      "breakdown": {
        "innovation": 90,
        "technical": 85,
        "presentation": 88,
        "impact": 87
      }
    }
  }
}
```

---

#### 2.4 Join Team
```http
POST /api/teams/join
```

**Request Body:**
```json
{
  "inviteCode": "INV-ABC123",
  "userId": "user_003"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Successfully joined team",
  "teamId": "team_002"
}
```

---

### 3. Submissions Management

#### 3.1 Submit Project
```http
POST /api/submissions
```

**Authentication:** Required  
**Content-Type:** `multipart/form-data`

**Form Data:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `teamId` | string | Yes | Team identifier |
| `eventId` | string | Yes | Event identifier |
| `projectName` | string | Yes | Project title |
| `description` | string | Yes | Project description |
| `projectFile` | file | Yes | ZIP file (max 50MB) |
| `demoUrl` | string | No | Live demo URL |
| `githubUrl` | string | No | GitHub repository |
| `videoUrl` | string | No | Demo video URL |

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "submissionId": "sub_001",
    "projectName": "DeFi Dashboard",
    "fileUrl": "https://storage.juryx.com/submissions/sub_001.zip",
    "ipfsHash": "QmX7Y8Z9...",
    "blockchainTx": "0x789abc...",
    "submittedAt": "2025-01-17T20:00:00Z"
  }
}
```

---

#### 3.2 Get Submission
```http
GET /api/submissions/{submissionId}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "sub_001",
    "projectName": "DeFi Dashboard",
    "description": "A comprehensive dashboard for DeFi protocols",
    "team": {
      "id": "team_001",
      "name": "Code Warriors"
    },
    "files": {
      "projectZip": "https://storage.juryx.com/submissions/sub_001.zip",
      "ipfsHash": "QmX7Y8Z9..."
    },
    "links": {
      "demo": "https://demo.example.com",
      "github": "https://github.com/team/project",
      "video": "https://youtube.com/watch?v=..."
    },
    "submittedAt": "2025-01-17T20:00:00Z",
    "status": "under_review"
  }
}
```

---

#### 3.3 List Submissions
```http
GET /api/submissions
```

**Query Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `eventId` | string | No | Filter by event |
| `teamId` | string | No | Filter by team |
| `status` | string | No | Filter by status |

---

### 4. Judging & Scoring

#### 4.1 Submit Scores
```http
POST /api/scorecards
```

**Authentication:** Required (Judge role)

**Request Body:**
```json
{
  "submissionId": "sub_001",
  "eventId": "evt_123456",
  "judgeId": "judge_001",
  "scores": {
    "innovation": 90,
    "technical": 85,
    "presentation": 88,
    "impact": 87
  },
  "comments": "Excellent implementation of blockchain concepts",
  "feedback": {
    "strengths": ["Clean code", "Great UX"],
    "improvements": ["Add more test coverage"]
  }
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "scorecardId": "score_001",
    "totalScore": 87.5,
    "submittedAt": "2025-01-18T15:30:00Z",
    "blockchainTx": "0xabc789..."
  }
}
```

---

#### 4.2 Get Event Scorecard
```http
GET /api/scorecards/{eventId}
```

**Authentication:** Required (Organizer/Judge)

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "eventId": "evt_123456",
    "totalSubmissions": 32,
    "scoredSubmissions": 28,
    "leaderboard": [
      {
        "rank": 1,
        "teamId": "team_001",
        "teamName": "Code Warriors",
        "projectName": "DeFi Dashboard",
        "totalScore": 92.5,
        "scores": {
          "innovation": 95,
          "technical": 90,
          "presentation": 92,
          "impact": 93
        }
      }
    ]
  }
}
```

---

#### 4.3 Get Judge's Scores
```http
GET /api/scorecards/judge/{judgeId}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "judgeId": "judge_001",
    "judgeName": "Dr. Jane Smith",
    "assignedSubmissions": 10,
    "scoredSubmissions": 8,
    "pendingSubmissions": 2,
    "scores": [...]
  }
}
```

---

### 5. User Management

#### 5.1 Get User Profile
```http
GET /api/users/{userId}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "user_001",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "participant",
    "walletAddress": "0x742d35Cc...",
    "teams": [...],
    "eventsParticipated": 5,
    "eventsWon": 2,
    "createdAt": "2024-06-15T10:00:00Z"
  }
}
```

---

#### 5.2 Update User Profile
```http
PUT /api/users/{userId}
```

**Request Body:**
```json
{
  "name": "John Updated Doe",
  "bio": "Full-stack blockchain developer",
  "skills": ["Solidity", "React", "Node.js"],
  "socialLinks": {
    "github": "johndoe",
    "linkedin": "johndoe",
    "twitter": "@johndoe"
  }
}
```

---

### 6. Blockchain Integration

#### 6.1 Verify Submission on Blockchain
```http
GET /api/blockchain/verify/{submissionId}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "submissionId": "sub_001",
    "verified": true,
    "blockchain": {
      "txHash": "0x789abc...",
      "blockNumber": 12345678,
      "network": "ethereum-sepolia",
      "timestamp": "2025-01-17T20:00:00Z"
    },
    "ipfs": {
      "hash": "QmX7Y8Z9...",
      "url": "https://ipfs.io/ipfs/QmX7Y8Z9..."
    }
  }
}
```

---

#### 6.2 Get Smart Contract Status
```http
GET /api/blockchain/contract/{eventId}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "eventId": "evt_123456",
    "contractAddress": "0x742d35Cc...",
    "network": "ethereum-sepolia",
    "status": "active",
    "totalSubmissions": 32,
    "finalizedResults": false,
    "prizePool": "17500",
    "deployedAt": "2025-01-01T00:00:00Z"
  }
}
```

---

### 7. Authentication (Clerk Integration)

#### 7.1 Login/Signup
Handled by Clerk - redirect to:
```
/api/auth/signin
/api/auth/signup
```

#### 7.2 Get Current Session
```http
GET /api/auth/session
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "userId": "user_001",
    "sessionId": "sess_abc123",
    "role": "participant",
    "expiresAt": "2025-01-20T00:00:00Z"
  }
}
```

---

## Data Models

### Event Model
```typescript
interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: 'upcoming' | 'active' | 'completed';
  maxTeams: number;
  organizerId: string;
  blockchain: {
    contractAddress: string;
    network: string;
  };
  prizes: Prize[];
  createdAt: Date;
  updatedAt: Date;
}
```

### Team Model
```typescript
interface Team {
  id: string;
  name: string;
  eventId: string;
  leaderId: string;
  members: TeamMember[];
  inviteCode: string;
  submissionId?: string;
  createdAt: Date;
}
```

### Submission Model
```typescript
interface Submission {
  id: string;
  teamId: string;
  eventId: string;
  projectName: string;
  description: string;
  files: {
    projectZip: string;
    ipfsHash: string;
  };
  links: {
    demo?: string;
    github?: string;
    video?: string;
  };
  status: 'pending' | 'under_review' | 'scored' | 'winner';
  submittedAt: Date;
}
```

### Scorecard Model
```typescript
interface Scorecard {
  id: string;
  submissionId: string;
  judgeId: string;
  eventId: string;
  scores: {
    [criterion: string]: number;
  };
  totalScore: number;
  comments: string;
  feedback: {
    strengths: string[];
    improvements: string[];
  };
  blockchainTx: string;
  submittedAt: Date;
}
```

---

## Error Handling

### Error Response Format
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {}
  }
}
```

### Common Error Codes

| Code | Status | Description |
|------|--------|-------------|
| `UNAUTHORIZED` | 401 | Authentication required |
| `FORBIDDEN` | 403 | Insufficient permissions |
| `NOT_FOUND` | 404 | Resource not found |
| `VALIDATION_ERROR` | 400 | Invalid request data |
| `DUPLICATE_ENTRY` | 409 | Resource already exists |
| `FILE_TOO_LARGE` | 413 | Uploaded file exceeds limit |
| `BLOCKCHAIN_ERROR` | 500 | Blockchain transaction failed |
| `SERVER_ERROR` | 500 | Internal server error |

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                         │
│  (Next.js Frontend / Mobile Apps / External Integrations)   │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      │ HTTPS/REST API
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                   API Gateway Layer                         │
│              (Next.js API Routes: /api/*)                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ Auth Middleware │  Rate Limiting │  │   Validation  │     │
│  │    (Clerk)   │  │    (DDOS)    │  │   (Zod)      │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────┬───────────────────────────────────────┘
                      │
         ┌────────────┼────────────┐
         │            │            │
         ▼            ▼            ▼
┌────────────┐ ┌────────────┐ ┌────────────┐
│   Events   │ │   Teams    │ │Submissions │
│   Service  │ │  Service   │ │  Service   │
└──────┬─────┘ └──────┬─────┘ └──────┬─────┘
       │              │              │
       │              │              │
       └──────────────┼──────────────┘
                      │
                      ▼
         ┌────────────────────────┐
         │   Database Layer       │
         │   (Prisma + PostgreSQL)│
         └────────────────────────┘
                      │
         ┌────────────┴────────────┐
         │                         │
         ▼                         ▼
┌─────────────────┐      ┌─────────────────┐
│ Blockchain Layer│      │  Storage Layer  │
│  (Ethereum)     │      │  (IPFS / S3)    │
│                 │      │                 │
│ - Smart Contract│      │ - File Storage  │
│ - Verification  │      │ - Media Assets  │
│ - Immutability  │      │ - Submissions   │
└─────────────────┘      └─────────────────┘
```

---

## Request Flow Example

### Submission Upload Flow

```
1. User initiates upload
   └─> POST /api/submissions
   
2. API validates request
   └─> Check authentication (Clerk)
   └─> Validate team membership
   └─> Check file size/type
   
3. File processing
   └─> Upload to storage (S3/IPFS)
   └─> Generate IPFS hash
   
4. Database update
   └─> Save submission record (Prisma)
   
5. Blockchain recording
   └─> Call smart contract
   └─> Store IPFS hash on-chain
   └─> Get transaction hash
   
6. Return response
   └─> Success with all identifiers
```

---

## Rate Limits

| Endpoint Type | Rate Limit | Time Window |
|--------------|------------|-------------|
| Public reads | 100 requests | 1 minute |
| Authenticated reads | 300 requests | 1 minute |
| Write operations | 30 requests | 1 minute |
| File uploads | 10 requests | 1 hour |
| Blockchain operations | 5 requests | 1 minute |

---

## Versioning

Current API Version: **v1**

```
/api/v1/events
/api/v1/teams
```

---

## Support

For API support or to report issues:
- GitHub Issues: [Repository Issues Page]
- Documentation: [Full API Docs]
- Email: support@juryx-blockchain.io

---

**Last Updated:** November 16, 2025  
**API Version:** 1.0.0