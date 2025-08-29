-- This is a reference SQL file showing the structure of data
-- Sanity uses its own document database, but this shows the equivalent structure

-- Profile table structure
CREATE TABLE IF NOT EXISTS profile (
    id VARCHAR PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    title VARCHAR(200) NOT NULL,
    bio TEXT NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    office VARCHAR(255),
    office_hours VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Education table structure
CREATE TABLE IF NOT EXISTS education (
    id VARCHAR PRIMARY KEY,
    degree VARCHAR(255) NOT NULL,
    institution VARCHAR(255) NOT NULL,
    year VARCHAR(4) NOT NULL,
    description TEXT,
    gpa VARCHAR(10),
    advisor VARCHAR(255),
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Projects table structure
CREATE TABLE IF NOT EXISTS projects (
    id VARCHAR PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    technologies TEXT[], -- Array of technologies
    link VARCHAR(500),
    status VARCHAR(20) DEFAULT 'completed',
    start_date DATE NOT NULL,
    end_date DATE,
    collaborators TEXT[], -- Array of collaborator names
    funding VARCHAR(255),
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Experience table structure
CREATE TABLE IF NOT EXISTS experience (
    id VARCHAR PRIMARY KEY,
    position VARCHAR(255) NOT NULL,
    institution VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    current BOOLEAN DEFAULT FALSE,
    description TEXT NOT NULL,
    achievements TEXT[], -- Array of achievements
    location VARCHAR(255),
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Publications table structure
CREATE TABLE IF NOT EXISTS publications (
    id VARCHAR PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    journal VARCHAR(255) NOT NULL,
    year VARCHAR(4) NOT NULL,
    authors TEXT[] NOT NULL, -- Array of author names
    link VARCHAR(500),
    abstract TEXT,
    type VARCHAR(50) DEFAULT 'journal',
    citations INTEGER DEFAULT 0,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
