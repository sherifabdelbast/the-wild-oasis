-- ============================================================
-- Run this in Supabase Dashboard → SQL Editor → New query
-- Then click "Run"
-- ============================================================
-- This creates RLS policies so authenticated users can upload
-- avatars to the "avatars" bucket (root or private/ folder).
-- ============================================================

-- 1. Allow authenticated users to INSERT (upload) into avatars bucket
--    No folder restriction – works for both root and private/
CREATE POLICY "Allow authenticated uploads to avatars"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'avatars');

-- 2. Allow authenticated users to SELECT (read) – for loading images
CREATE POLICY "Allow authenticated read avatars"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'avatars');

-- 3. Optional: allow UPDATE (overwrite) if you add upsert back later
CREATE POLICY "Allow authenticated update avatars"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'avatars')
WITH CHECK (bucket_id = 'avatars');

-- 4. Optional: allow DELETE (remove avatar file)
CREATE POLICY "Allow authenticated delete avatars"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'avatars');

-- ============================================================
-- If you get "policy already exists", drop the old one first:
-- Storage → Policies → find the avatars policy → Delete
-- Then run this file again.
-- ============================================================
