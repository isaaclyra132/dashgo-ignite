import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex
            align="center"
        >
            {showProfileData && (
                <Box
                    mr="4"
                    textAlign="right"
                >
                    <Text>Isaac de Lyra Jr</Text>
                    <Text
                        color="gray.300"
                        fontSize="small"
                    >
                        isaac.lyra.junior@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Isaac de Lyra" src="https://github.com/isaaclyra132.png" />
        </Flex>
    );
}